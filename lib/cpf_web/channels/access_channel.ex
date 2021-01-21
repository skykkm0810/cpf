defmodule CpfWeb.AccessChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:access", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (access:lobby).
  # @impl true
  # def handle_in("shout", payload, socket) do
  #   broadcast socket, "shout", payload
  #   {:noreply, socket}
  # end

  def handle_in("access:req", %{"body" => payload}, socket) do
    res = confirm(payload);
    push(socket, "access:resp", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def confirm(info) do
    Cpf.ConAccount.list_accounts()
    |> Enum.filter( fn data -> data.uname == info["uname"] end)
    |> Enum.filter( fn data -> data.pwd == info["pwd"] end)
    |> Enum.map( fn data -> 
      %{
        id: data.id,
        centerId: data.centerId,
        name: data.name,
        level: data.level
      } end)
  end

  # def list_accounts() do
  #   Cpf.ConAccount.list_accounts()
  #   |> Enum.map(fn data ->
  #     %{
  #       id: data.id,
  #       name: data.name,
  #       uname: data.uname,
  #       pwd: data.pwd,
  #       contact: data.contact,
  #       birth: data.birth,
  #       email: data.email,
  #       level: data.level,
  #     } end)
  # end





  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
