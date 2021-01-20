defmodule CpfWeb.SleepEventController do
  use CpfWeb, :controller

  alias Cpf.Event
  alias Cpf.Event.SleepEvent

  action_fallback CpfWeb.FallbackController

  def index(conn, _params) do
    sleepevents = Event.list_sleepevents()
    render(conn, "index.json", sleepevents: sleepevents)
  end

  def create(conn, sleep_event_params) do
    with {:ok, %SleepEvent{} = sleep_event} <- Event.create_sleep_event(sleep_event_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.sleep_event_path(conn, :show, sleep_event))
      |> render("show.json", sleep_event: sleep_event)
    end
  end

  def show(conn, %{"id" => id}) do
    sleep_event = Event.get_sleep_event!(id)
    render(conn, "show.json", sleep_event: sleep_event)
  end

  def update(conn, %{"id" => id, "sleep_event" => sleep_event_params}) do
    sleep_event = Event.get_sleep_event!(id)

    with {:ok, %SleepEvent{} = sleep_event} <- Event.update_sleep_event(sleep_event, sleep_event_params) do
      render(conn, "show.json", sleep_event: sleep_event)
    end
  end

  def delete(conn, %{"id" => id}) do
    sleep_event = Event.get_sleep_event!(id)

    with {:ok, %SleepEvent{}} <- Event.delete_sleep_event(sleep_event) do
      send_resp(conn, :no_content, "")
    end
  end
end
