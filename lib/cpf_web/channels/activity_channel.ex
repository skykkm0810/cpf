defmodule CpfWeb.ActivityChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:activity", payload, socket) do
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
  # broadcast to everyone in the current topic (activity:lobby).
  
  def handle_in("activity:add:req", %{"body" => payload}, socket) do
    create_activity(payload)
    res = list_activities()
    push(socket, "activity:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("activity:list:req", %{"body" => payload}, socket) do
    res = list_activities()
    push(socket, "activity:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("activity:detail:req", %{"body" => payload}, socket) do
    res = get_activity(payload)
    push(socket, "activity:detail", res)
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("activity:detail:update:req", %{"body" => payload}, socket) do
    update_activity(payload)
    res = list_activities()
    push(socket, "activity:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("activity:delete:req", %{"body" => payload}, socket) do
    delete_activity(payload)
    res = list_activities()
    push(socket, "activity:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end




  #   Function




  def list_activities() do
    center = Cpf.ConCenter.list_centers()
    |> Enum.map(fn c -> %{
      id: c.id,
      name: c.name
    } end)
    instructor = Cpf.ConInstructor.list_instructors()
    |> Enum.map(fn i -> %{
      id: i.id,
      name: i.name,
      contact: i.contact
    } end)

    Cpf.ConActivity.list_activities()
    |> Enum.map(fn data -> 
      c = Enum.filter(center, fn d -> d.id == data.centerId end)
      i = Enum.filter(instructor, fn d -> d.id == data.instructorId end)
      %{
        id: data.id,
        name: data.name,
        contact: data.contact,
        instructor: i,
        center: c,
        progress: data.progress,
        datetime: data.date
      }
    end)
  end

  def get_activity(data) do
    {:ok, res} = Cpf.ConActivity.get_activity!(data["id"])
    %{
      id: data.id,
      name: data.name,
      contact: data.contact,
      instructorId: data.instructorId,
      centerId: data.centerId,
      region: data.region
    }
  end

  def create_activity(data) do
    {:ok, res} = Cpf.ConActivity.create_activity(data)
  end

  def update_activity(data) do
    activity = Cpf.ConActivity.get_activity!(data["id"])
    {:ok, res} = Cpf.ConActivity.update_activity(activity, data)
  end

  def delete_activity(data) do
    activity = Cpf.ConActivity.get_activity!(data["id"])
    {:ok, res} = Cpf.ConActivity.delete_activity(activity)
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
