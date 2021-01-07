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
  def handle_in("center:add", %{"body" => payload}, socket) do
    data = create_device(payload)
    # IO.puts "return of create_device ===>>  #{inspect data}"
    push(socket, "center:add", data)
    {:reply, {:ok, data}, socket}
  end

  def handle_in("center:detail:req", %{"body" => payload}, socket) do
    IO.puts "return of get center ===>> #{inspect payload}"
    # data = Cpf.ConCenter.get_center(payload)
    {:reply, {:ok, payload}, socket}
  end
  
  
  #   Function
  
  def 

  def create_center(data) do
    {:ok, center} = Cpf.ConCenter.create_center(data)
    %{
      id: center.id,
      name: center.name,
      address: center.address,
      limited: center.limited,
      manager: center.manager,
      contact: center.contact
      email: center.email
    }
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
