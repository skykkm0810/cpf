defmodule CpfWeb.SleepEventControllerTest do
  use CpfWeb.ConnCase

  alias Cpf.Event
  alias Cpf.Event.SleepEvent

  @create_attrs %{
    awake: "some awake",
    centerId: 42,
    deviceId: 42,
    personId: 42,
    sleep: "some sleep",
    vId: 42,
    value: "some value"
  }
  @update_attrs %{
    awake: "some updated awake",
    centerId: 43,
    deviceId: 43,
    personId: 43,
    sleep: "some updated sleep",
    vId: 43,
    value: "some updated value"
  }
  @invalid_attrs %{awake: nil, centerId: nil, deviceId: nil, personId: nil, sleep: nil, vId: nil, value: nil}

  def fixture(:sleep_event) do
    {:ok, sleep_event} = Event.create_sleep_event(@create_attrs)
    sleep_event
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all sleepevents", %{conn: conn} do
      conn = get(conn, Routes.sleep_event_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create sleep_event" do
    test "renders sleep_event when data is valid", %{conn: conn} do
      conn = post(conn, Routes.sleep_event_path(conn, :create), sleep_event: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.sleep_event_path(conn, :show, id))

      assert %{
               "id" => id,
               "awake" => "some awake",
               "centerId" => 42,
               "deviceId" => 42,
               "personId" => 42,
               "sleep" => "some sleep",
               "vId" => 42,
               "value" => "some value"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.sleep_event_path(conn, :create), sleep_event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update sleep_event" do
    setup [:create_sleep_event]

    test "renders sleep_event when data is valid", %{conn: conn, sleep_event: %SleepEvent{id: id} = sleep_event} do
      conn = put(conn, Routes.sleep_event_path(conn, :update, sleep_event), sleep_event: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.sleep_event_path(conn, :show, id))

      assert %{
               "id" => id,
               "awake" => "some updated awake",
               "centerId" => 43,
               "deviceId" => 43,
               "personId" => 43,
               "sleep" => "some updated sleep",
               "vId" => 43,
               "value" => "some updated value"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, sleep_event: sleep_event} do
      conn = put(conn, Routes.sleep_event_path(conn, :update, sleep_event), sleep_event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete sleep_event" do
    setup [:create_sleep_event]

    test "deletes chosen sleep_event", %{conn: conn, sleep_event: sleep_event} do
      conn = delete(conn, Routes.sleep_event_path(conn, :delete, sleep_event))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.sleep_event_path(conn, :show, sleep_event))
      end
    end
  end

  defp create_sleep_event(_) do
    sleep_event = fixture(:sleep_event)
    %{sleep_event: sleep_event}
  end
end
