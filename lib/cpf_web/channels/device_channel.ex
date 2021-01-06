defmodule CpfWeb.DeviceChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:device", payload, socket) do
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
  # broadcast to everyone in the current topic (device:lobby).
  # @impl true
  # def handle_in("shout", payload, socket) do
  #   broadcast socket, "shout", payload
  #   {:noreply, socket}
  # end

  def handle_in("device:list:req", %{"centerId" => id}, socket) do
    list_devices(id)
    |> Enum.map(fn data -> push(socket, "device:list", %{
      id: data.id,
      centerId: data.centerId,
      type: data.type,
      name: data.name,
      location: data.location,
      inserted: data.inserted_at,
      status: data.status
    }) end)
    {:reply, {:ok, id}, socket}
  end

  def handle_in("device:add", %{"body" => payload}, socket) do
    data = create_device(payload)
    # IO.puts "return of create_device ===>>  #{inspect data}"
    push(socket, "device:add", data)
    {:reply, {:ok, data}, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  def list_devices(cId) do
    # devices = 
    Cpf.ControlDevice.list_devices()
    |> Enum.filter(fn data ->
      data.centerId == cId 
      end)
    # IO.puts "return of list_devices ===>>  #{inspect devices}"
    # devices
  end

  def create_device(data) do
    {:ok, device} = Cpf.ControlDevice.create_device(data)
    %{
      id: device.id,
      centerId: device.centerId,
      type: device.type,
      name: device.name,
      location: device.location,
      status: device.status
    }
  end
end
