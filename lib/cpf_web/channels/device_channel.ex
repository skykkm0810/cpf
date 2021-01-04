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

  def handle_in("add:device", %{"body" => payload}, socket) do
    data = create_device(payload)
    response = Cpf.PostView.render("show.json", %{data: data})
    {:reply, {:ok, response}, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  def list_devices() do
    Cpf.ControlDevice.list_devices()
    |> Enum.filter(fn x -> 
      x["centerId"] == 1
      end)
  end

  def create_device(data) do
    Cpf.ControlDevice.create_device(data)
  end

end
