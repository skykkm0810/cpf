defmodule Cpf.EventTest do
  use Cpf.DataCase

  alias Cpf.Event

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{centerId: 42, robotId: 42, vId: 42}
    @update_attrs %{centerId: 43, robotId: 43, vId: 43}
    @invalid_attrs %{centerId: nil, robotId: nil, vId: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.centerId == 42
      assert robot_event.robotId == 42
      assert robot_event.vId == 42
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.centerId == 43
      assert robot_event.robotId == 43
      assert robot_event.vId == 43
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{eventd: "some eventd", eventt: "some eventt", type: "some type"}
    @update_attrs %{eventd: "some updated eventd", eventt: "some updated eventt", type: "some updated type"}
    @invalid_attrs %{eventd: nil, eventt: nil, type: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.eventd == "some eventd"
      assert robot_event.eventt == "some eventt"
      assert robot_event.type == "some type"
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.eventd == "some updated eventd"
      assert robot_event.eventt == "some updated eventt"
      assert robot_event.type == "some updated type"
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "sleepevents" do
    alias Cpf.Event.SleepEvent

    @valid_attrs %{awake: "some awake", desc: "some desc", personId: 42, sleep: "some sleep", value: "some value"}
    @update_attrs %{awake: "some updated awake", desc: "some updated desc", personId: 43, sleep: "some updated sleep", value: "some updated value"}
    @invalid_attrs %{awake: nil, desc: nil, personId: nil, sleep: nil, value: nil}

    def sleep_event_fixture(attrs \\ %{}) do
      {:ok, sleep_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_sleep_event()

      sleep_event
    end

    test "list_sleepevents/0 returns all sleepevents" do
      sleep_event = sleep_event_fixture()
      assert Event.list_sleepevents() == [sleep_event]
    end

    test "get_sleep_event!/1 returns the sleep_event with given id" do
      sleep_event = sleep_event_fixture()
      assert Event.get_sleep_event!(sleep_event.id) == sleep_event
    end

    test "create_sleep_event/1 with valid data creates a sleep_event" do
      assert {:ok, %SleepEvent{} = sleep_event} = Event.create_sleep_event(@valid_attrs)
      assert sleep_event.awake == "some awake"
      assert sleep_event.desc == "some desc"
      assert sleep_event.personId == 42
      assert sleep_event.sleep == "some sleep"
      assert sleep_event.value == "some value"
    end

    test "create_sleep_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_sleep_event(@invalid_attrs)
    end

    test "update_sleep_event/2 with valid data updates the sleep_event" do
      sleep_event = sleep_event_fixture()
      assert {:ok, %SleepEvent{} = sleep_event} = Event.update_sleep_event(sleep_event, @update_attrs)
      assert sleep_event.awake == "some updated awake"
      assert sleep_event.desc == "some updated desc"
      assert sleep_event.personId == 43
      assert sleep_event.sleep == "some updated sleep"
      assert sleep_event.value == "some updated value"
    end

    test "update_sleep_event/2 with invalid data returns error changeset" do
      sleep_event = sleep_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_sleep_event(sleep_event, @invalid_attrs)
      assert sleep_event == Event.get_sleep_event!(sleep_event.id)
    end

    test "delete_sleep_event/1 deletes the sleep_event" do
      sleep_event = sleep_event_fixture()
      assert {:ok, %SleepEvent{}} = Event.delete_sleep_event(sleep_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_sleep_event!(sleep_event.id) end
    end

    test "change_sleep_event/1 returns a sleep_event changeset" do
      sleep_event = sleep_event_fixture()
      assert %Ecto.Changeset{} = Event.change_sleep_event(sleep_event)
    end
  end

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{centerId: 42, event: "some event", "event-date": "some event-date", "event-time": "some event-time", robotId: 42, vid: 42}
    @update_attrs %{centerId: 43, event: "some updated event", "event-date": "some updated event-date", "event-time": "some updated event-time", robotId: 43, vid: 43}
    @invalid_attrs %{centerId: nil, event: nil, "event-date": nil, "event-time": nil, robotId: nil, vid: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.centerId == 42
      assert robot_event.event == "some event"
      assert robot_event.event-date == "some event-date"
      assert robot_event.event-time == "some event-time"
      assert robot_event.robotId == 42
      assert robot_event.vid == 42
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.centerId == 43
      assert robot_event.event == "some updated event"
      assert robot_event.event-date == "some updated event-date"
      assert robot_event.event-time == "some updated event-time"
      assert robot_event.robotId == 43
      assert robot_event.vid == 43
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{centerId: 42, event: "some event", eventdate: "some eventdate", eventtime: "some eventtime", robotId: 42, vid: 42}
    @update_attrs %{centerId: 43, event: "some updated event", eventdate: "some updated eventdate", eventtime: "some updated eventtime", robotId: 43, vid: 43}
    @invalid_attrs %{centerId: nil, event: nil, eventdate: nil, eventtime: nil, robotId: nil, vid: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.centerId == 42
      assert robot_event.event == "some event"
      assert robot_event.eventdate == "some eventdate"
      assert robot_event.eventtime == "some eventtime"
      assert robot_event.robotId == 42
      assert robot_event.vid == 42
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.centerId == 43
      assert robot_event.event == "some updated event"
      assert robot_event.eventdate == "some updated eventdate"
      assert robot_event.eventtime == "some updated eventtime"
      assert robot_event.robotId == 43
      assert robot_event.vid == 43
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{centerId: 42, event: "some event", eventdate: "some eventdate", eventtime: "some eventtime", robotId: 42, vId: 42}
    @update_attrs %{centerId: 43, event: "some updated event", eventdate: "some updated eventdate", eventtime: "some updated eventtime", robotId: 43, vId: 43}
    @invalid_attrs %{centerId: nil, event: nil, eventdate: nil, eventtime: nil, robotId: nil, vId: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.centerId == 42
      assert robot_event.event == "some event"
      assert robot_event.eventdate == "some eventdate"
      assert robot_event.eventtime == "some eventtime"
      assert robot_event.robotId == 42
      assert robot_event.vId == 42
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.centerId == 43
      assert robot_event.event == "some updated event"
      assert robot_event.eventdate == "some updated eventdate"
      assert robot_event.eventtime == "some updated eventtime"
      assert robot_event.robotId == 43
      assert robot_event.vId == 43
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "robotevents" do
    alias Cpf.Event.RobotEvent

    @valid_attrs %{centerId: 42, deviceId: 42, event: "some event", eventdate: "some eventdate", eventtime: "some eventtime", vId: 42}
    @update_attrs %{centerId: 43, deviceId: 43, event: "some updated event", eventdate: "some updated eventdate", eventtime: "some updated eventtime", vId: 43}
    @invalid_attrs %{centerId: nil, deviceId: nil, event: nil, eventdate: nil, eventtime: nil, vId: nil}

    def robot_event_fixture(attrs \\ %{}) do
      {:ok, robot_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_robot_event()

      robot_event
    end

    test "list_robotevents/0 returns all robotevents" do
      robot_event = robot_event_fixture()
      assert Event.list_robotevents() == [robot_event]
    end

    test "get_robot_event!/1 returns the robot_event with given id" do
      robot_event = robot_event_fixture()
      assert Event.get_robot_event!(robot_event.id) == robot_event
    end

    test "create_robot_event/1 with valid data creates a robot_event" do
      assert {:ok, %RobotEvent{} = robot_event} = Event.create_robot_event(@valid_attrs)
      assert robot_event.centerId == 42
      assert robot_event.deviceId == 42
      assert robot_event.event == "some event"
      assert robot_event.eventdate == "some eventdate"
      assert robot_event.eventtime == "some eventtime"
      assert robot_event.vId == 42
    end

    test "create_robot_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_robot_event(@invalid_attrs)
    end

    test "update_robot_event/2 with valid data updates the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{} = robot_event} = Event.update_robot_event(robot_event, @update_attrs)
      assert robot_event.centerId == 43
      assert robot_event.deviceId == 43
      assert robot_event.event == "some updated event"
      assert robot_event.eventdate == "some updated eventdate"
      assert robot_event.eventtime == "some updated eventtime"
      assert robot_event.vId == 43
    end

    test "update_robot_event/2 with invalid data returns error changeset" do
      robot_event = robot_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_robot_event(robot_event, @invalid_attrs)
      assert robot_event == Event.get_robot_event!(robot_event.id)
    end

    test "delete_robot_event/1 deletes the robot_event" do
      robot_event = robot_event_fixture()
      assert {:ok, %RobotEvent{}} = Event.delete_robot_event(robot_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_robot_event!(robot_event.id) end
    end

    test "change_robot_event/1 returns a robot_event changeset" do
      robot_event = robot_event_fixture()
      assert %Ecto.Changeset{} = Event.change_robot_event(robot_event)
    end
  end

  describe "sleepevents" do
    alias Cpf.Event.SleepEvent

    @valid_attrs %{awake: "some awake", centerId: 42, deviceId: 42, personId: 42, sleep: "some sleep", vId: 42, value: "some value"}
    @update_attrs %{awake: "some updated awake", centerId: 43, deviceId: 43, personId: 43, sleep: "some updated sleep", vId: 43, value: "some updated value"}
    @invalid_attrs %{awake: nil, centerId: nil, deviceId: nil, personId: nil, sleep: nil, vId: nil, value: nil}

    def sleep_event_fixture(attrs \\ %{}) do
      {:ok, sleep_event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Event.create_sleep_event()

      sleep_event
    end

    test "list_sleepevents/0 returns all sleepevents" do
      sleep_event = sleep_event_fixture()
      assert Event.list_sleepevents() == [sleep_event]
    end

    test "get_sleep_event!/1 returns the sleep_event with given id" do
      sleep_event = sleep_event_fixture()
      assert Event.get_sleep_event!(sleep_event.id) == sleep_event
    end

    test "create_sleep_event/1 with valid data creates a sleep_event" do
      assert {:ok, %SleepEvent{} = sleep_event} = Event.create_sleep_event(@valid_attrs)
      assert sleep_event.awake == "some awake"
      assert sleep_event.centerId == 42
      assert sleep_event.deviceId == 42
      assert sleep_event.personId == 42
      assert sleep_event.sleep == "some sleep"
      assert sleep_event.vId == 42
      assert sleep_event.value == "some value"
    end

    test "create_sleep_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Event.create_sleep_event(@invalid_attrs)
    end

    test "update_sleep_event/2 with valid data updates the sleep_event" do
      sleep_event = sleep_event_fixture()
      assert {:ok, %SleepEvent{} = sleep_event} = Event.update_sleep_event(sleep_event, @update_attrs)
      assert sleep_event.awake == "some updated awake"
      assert sleep_event.centerId == 43
      assert sleep_event.deviceId == 43
      assert sleep_event.personId == 43
      assert sleep_event.sleep == "some updated sleep"
      assert sleep_event.vId == 43
      assert sleep_event.value == "some updated value"
    end

    test "update_sleep_event/2 with invalid data returns error changeset" do
      sleep_event = sleep_event_fixture()
      assert {:error, %Ecto.Changeset{}} = Event.update_sleep_event(sleep_event, @invalid_attrs)
      assert sleep_event == Event.get_sleep_event!(sleep_event.id)
    end

    test "delete_sleep_event/1 deletes the sleep_event" do
      sleep_event = sleep_event_fixture()
      assert {:ok, %SleepEvent{}} = Event.delete_sleep_event(sleep_event)
      assert_raise Ecto.NoResultsError, fn -> Event.get_sleep_event!(sleep_event.id) end
    end

    test "change_sleep_event/1 returns a sleep_event changeset" do
      sleep_event = sleep_event_fixture()
      assert %Ecto.Changeset{} = Event.change_sleep_event(sleep_event)
    end
  end
end
