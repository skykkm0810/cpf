defmodule CpfWeb.InstructorChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:instructor", payload, socket) do
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
  # broadcast to everyone in the current topic (instructor:lobby).

  def handle_in("instructor:add:req", %{"body" => payload}, socket) do
    create_instructor(payload)
    res = list_instructors()
    push(socket, "instructor:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("instructor:list:req", %{"body" => payload}, socket) do
    res = list_instructors()
    push(socket, "instructor:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("instructor:detail:req", %{"body" => payload}, socket) do
    res = get_instructor(payload)
    push(socket, "instructor:detail", res)
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("instructor:detail:update:req", %{"body" => payload}, socket) do
    update_instructor(payload)
    res = list_instructors()
    push(socket, "instructor:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("instructor:delete:req", %{"body" => payload}, socket) do
    delete_instructor(payload)
    res = list_instructors()
    push(socket, "instructor:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end




  #   Function




  def list_instructors() do
    center = Cpf.ConCenter.list_centers()
    |> Enum.map(fn c -> %{
      id: c.id,
      name: c.name
    } end)

    Cpf.ConInstructor.list_instructors()
    |> Enum.map(fn d -> 
      [c] = Enum.filter(center, fn d -> d.id == d.centerId end)
      %{
        id: d.id,
        name: d.name,
        contact: d.contact,
        task: d.task,
        center: c.name,
        centerId: d.centerId,
        region: d.region
      }
    end)
  end

  def get_instructor(d) do
    {:ok, res} = Cpf.ConInstructor.get_instructor!(d["id"])
    %{
      id: d.id,
      name: d.name,
      contact: d.contact,
      task: d.task,
      centerId: d.centerId,
      region: d.region
    }
  end

  def create_instructor(data) do
    {:ok, res} = Cpf.ConInstructor.create_instructor(data)
  end

  def update_instructor(data) do
    instructor = Cpf.ConInstructor.get_instructor!(data["id"])
    {:ok, res} = Cpf.ConInstructor.update_instructor(instructor, data)
  end

  def delete_instructor(data) do
    instructor = Cpf.ConInstructor.get_instructor!(data["id"])
    {:ok, res} = Cpf.ConInstructor.delete_instructor(instructor)
  end







  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
