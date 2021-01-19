defmodule CpfWeb.RobotEventControllerTest do
  use CpfWeb.ConnCase

  alias Cpf.Event
  alias Cpf.Event.RobotEvent

  @create_attrs %{
    centerId: 42,
    event: "some event",
    eventdate: "some eventdate",
    eventtime: "some eventtime",
    robotId: 42,
    vId: 42
  }
  @update_attrs %{
    centerId: 43,
    event: "some updated event",
    eventdate: "some updated eventdate",
    eventtime: "some updated eventtime",
    robotId: 43,
    vId: 43
  }
  @invalid_attrs %{centerId: nil, event: nil, eventdate: nil, eventtime: nil, robotId: nil, vId: nil}

  def fixture(:robot_event) do
    {:ok, robot_event} = Event.create_robot_event(@create_attrs)
    robot_event
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all robotevents", %{conn: conn} do
      conn = get(conn, Routes.robot_event_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create robot_event" do
    test "renders robot_event when data is valid", %{conn: conn} do
      conn = post(conn, Routes.robot_event_path(conn, :create), robot_event: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.robot_event_path(conn, :show, id))

      assert %{
               "id" => id,
               "centerId" => 42,
               "event" => "some event",
               "eventdate" => "some eventdate",
               "eventtime" => "some eventtime",
               "robotId" => 42,
               "vId" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.robot_event_path(conn, :create), robot_event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update robot_event" do
    setup [:create_robot_event]

    test "renders robot_event when data is valid", %{conn: conn, robot_event: %RobotEvent{id: id} = robot_event} do
      conn = put(conn, Routes.robot_event_path(conn, :update, robot_event), robot_event: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.robot_event_path(conn, :show, id))

      assert %{
               "id" => id,
               "centerId" => 43,
               "event" => "some updated event",
               "eventdate" => "some updated eventdate",
               "eventtime" => "some updated eventtime",
               "robotId" => 43,
               "vId" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, robot_event: robot_event} do
      conn = put(conn, Routes.robot_event_path(conn, :update, robot_event), robot_event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete robot_event" do
    setup [:create_robot_event]

    test "deletes chosen robot_event", %{conn: conn, robot_event: robot_event} do
      conn = delete(conn, Routes.robot_event_path(conn, :delete, robot_event))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.robot_event_path(conn, :show, robot_event))
      end
    end
  end

  defp create_robot_event(_) do
    robot_event = fixture(:robot_event)
    %{robot_event: robot_event}
  end
end
