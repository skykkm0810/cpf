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

  def handle_in("req:device:list", socket) do
    body = list_devices()
    {:reply, {:ok, body}, socket}
  end

  def handle_in("device:add", %{"body" => payload}, socket) do
    data = create_device(payload)
    {:reply, {:ok, data}, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  def list_devices() do
    # devices = 
    Cpf.ControlDevice.list_devices()
    |> Enum.map(fn data -> %{
        id: data.id,
        centerId: data.centerId,
        type: data.type,
        name: data.name,
        location: data.location,
        status: data.status
      } end)
    # IO.puts "return of list_devices ===>>  #{inspect devices}"
    # devices
  end

  def create_device(data) do
    {:ok, device} = Cpf.ControlDevice.create_device(data)
    resp = 
    %{
      id: device.id,
      centerId: device.centerId,
      type: device.type,
      name: device.name,
      location: device.location,
      status: device.status
    }
    IO.puts "return of list_devices ===>>  #{inspect resp}"
    resp
  end

  # def handle_info(:after_join, socket) do
  #   Cpf.Control.list_devices()
  #   |> Enum.each(fn data -> push(socket, "deviceList", %{
  #       id: data.id,
  #       centerId: data.centerId,
  #       type: data.type,
  #       name: data.name,
  #       location: data.location,
  #       status: data.status
  #     }) end)
  #   {:noreply, socket}
  # end
end
