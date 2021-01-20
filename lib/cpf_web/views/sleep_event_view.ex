defmodule CpfWeb.SleepEventView do
  use CpfWeb, :view
  alias CpfWeb.SleepEventView

  def render("index.json", %{sleepevents: sleepevents}) do
    %{data: render_many(sleepevents, SleepEventView, "sleep_event.json")}
  end

  def render("show.json", %{sleep_event: sleep_event}) do
    %{data: render_one(sleep_event, SleepEventView, "sleep_event.json")}
  end

  def render("sleep_event.json", %{sleep_event: sleep_event}) do
    %{id: sleep_event.id,
      centerId: sleep_event.centerId,
      vId: sleep_event.vId,
      deviceId: sleep_event.deviceId,
      value: sleep_event.value,
      sleep: sleep_event.sleep,
      awake: sleep_event.awake,
      personId: sleep_event.personId}
  end
end
