defmodule CpfWeb.EventView do
  use CpfWeb, :view
  alias CpfWeb.EventView

  def render("index.json", %{events: events}) do
    %{data: render_many(events, EventView, "event.json")}
  end

  def render("show.json", %{event: event}) do
    %{data: render_one(event, EventView, "event.json")}
  end

  def render("event.json", %{event: event}) do
    %{id: event.id,
      vid: event.vid,
      centerId: event.centerId,
      robotId: event.robotId,
      type: event.type}
  end
end
