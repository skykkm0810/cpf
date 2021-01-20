defmodule CpfWeb.RobotEventController do
  use CpfWeb, :controller

  alias Cpf.Event
  alias Cpf.Event.RobotEvent

  action_fallback CpfWeb.FallbackController

  def index(conn, _params) do
    robotevents = Event.list_robotevents()
    render(conn, "index.json", robotevents: robotevents)
  end

  def create(conn, robot_event_params) do
    with {:ok, %RobotEvent{} = robot_event} <- Event.create_robot_event(robot_event_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.robot_event_path(conn, :show, robot_event))
      |> render("show.json", robot_event: robot_event)
    end
  end

  def show(conn, %{"id" => id}) do
    robot_event = Event.get_robot_event!(id)
    render(conn, "show.json", robot_event: robot_event)
  end

  def update(conn, %{"id" => id, "robot_event" => robot_event_params}) do
    robot_event = Event.get_robot_event!(id)

    with {:ok, %RobotEvent{} = robot_event} <- Event.update_robot_event(robot_event, robot_event_params) do
      render(conn, "show.json", robot_event: robot_event)
    end
  end

  def delete(conn, %{"id" => id}) do
    robot_event = Event.get_robot_event!(id)

    with {:ok, %RobotEvent{}} <- Event.delete_robot_event(robot_event) do
      send_resp(conn, :no_content, "")
    end
  end
end
