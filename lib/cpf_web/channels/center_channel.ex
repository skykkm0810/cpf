defmodule CpfWeb.CenterChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:center", payload, socket) do
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
  # broadcast to everyone in the current topic (center:lobby).
  # @impl true
  # def handle_in("shout", payload, socket) do
  #   broadcast socket, "shout", payload
  #   {:noreply, socket}
  # end

  def handle_in("center:add:req", %{"body" => payload}, socket) do
    create_center(payload)
    res = list_centers()
    push(socket, "center:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("center:list:req", %{"body" => payload}, socket) do
    res = list_centers()
    push(socket, "center:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("center:detail:req", %{"body" => payload}, socket) do
    res = get_center(payload)
    push(socket, "center:detail", res)
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("center:detail:update:req", %{"body" => payload}, socket) do
    update_center(payload)
    res = list_centers()
    push(socket, "center:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("center:delete:req", %{"body" => payload}, socket) do
    delete_center(payload)
    res = list_centers()
    push(socket, "center:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end




  #   Function




  def list_centers() do
    Cpf.ConCenter.list_centers()
    |> Enum.map(fn data -> %{
      id: data.id,
      name: data.name,
      manager: data.manager,
      contact: data.contact,
      limited: data.limited,
      address: data.address,
      email: data.email
    } end)
  end

  def get_center(data) do
    {:ok, res} = Cpf.ConCenter.get_center!(data["id"])
    %{
      id: data.id,
      name: data.name,
      manager: data.manager,
      contact: data.contact,
      limited: data.limited,
      address: data.address,
      email: data.email
    }
  end

  def create_center(data) do
    {:ok, res} = Cpf.ConCenter.create_center(data)
  end

  def update_center(data) do
    center = Cpf.ConCenter.get_center!(data["id"])
    {:ok, res} = Cpf.ConCenter.update_center(center, data)
  end

  def delete_center(data) do
    center = Cpf.ConCenter.get_center!(data["id"])
    {:ok, res} = Cpf.ConCenter.delete_center(center)
  end




  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
