defmodule CpfWeb.RobotEventView do
  use CpfWeb, :view
  alias CpfWeb.RobotEventView

  def render("index.json", %{robotevents: robotevents}) do
    %{data: render_many(robotevents, RobotEventView, "robot_event.json")}
  end

  def render("show.json", %{robot_event: robot_event}) do
    %{data: render_one(robot_event, RobotEventView, "robot_event.json")}
  end

  def render("robot_event.json", %{robot_event: robot_event}) do
    %{id: robot_event.id,
      vId: robot_event.vId,
      centerId: robot_event.centerId,
      robotId: robot_event.robotId,
      event: robot_event.event,
      eventtime: robot_event.eventtime,
      eventdate: robot_event.eventdate}
  end
end
