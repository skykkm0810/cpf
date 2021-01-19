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
  
  
  def handle_in("device:add:req", %{"body" => payload}, socket) do
    # IO.puts "===>> #{inspect payload}"
    create_device(payload)
    res = list_devices()
    push(socket, "device:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("device:list:req", %{"body" => payload}, socket) do
    res = list_devices()
    push(socket, "device:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("device:detail:req", %{"body" => payload}, socket) do
    res = get_device(payload)
    push(socket, "device:detail", res)
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("device:detail:update:req", %{"body" => payload}, socket) do
    IO.puts "===>> #{inspect payload}"
    update_device(payload)
    res = list_devices()
    push(socket, "device:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("device:delete:req", %{"body" => payload}, socket) do
    delete_device(payload)
    res = list_devices()
    push(socket, "device:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end




  #   Function




  def list_devices() do
    center = Cpf.ConCenter.list_centers()
    |> Enum.map(fn c -> %{
      id: c.id,
      name: c.name
    } end)

    Cpf.ConDevice.list_devices()
    |> Enum.map(fn data ->
      [c] = Enum.filter(center, fn d -> d.id == data.centerId end)
      %{
        id: data.id,
        name: data.name,
        center: c.name,
        centerId: data.centerId,
        location: data.location,
        status: data.status,
        type: data.type,
        inserted: data.updated_at
      } end)
  end

  def get_device(data) do
    {:ok, res} = Cpf.ConDevice.get_device!(data["id"])
    %{
      id: res.id,
      name: res.name,
      centerId: res.centerId,
      location: res.location,
      status: res.status,
      type: res.type
    }
  end

  def create_device(data) do
    {:ok, res} = Cpf.ConDevice.create_device(data)
  end

  def update_device(data) do
    device = Cpf.ConDevice.get_device!(data["id"])
    {:ok, res} = Cpf.ConDevice.update_device(device, data)
    IO.puts "===>> #{inspect res}"
  end

  def delete_device(data) do
    device = Cpf.ConDevice.get_device!(data["id"])
    {:ok, res} = Cpf.ConDevice.delete_device(device)
  end


  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
