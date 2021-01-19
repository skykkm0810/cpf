defmodule Cpf.ApiEventTest do
  use Cpf.DataCase

  alias Cpf.ApiEvent

  describe "events" do
    alias Cpf.ApiEvent.Event

    @valid_attrs %{centerId: 42, robotId: 42, type: "some type", vid: 42}
    @update_attrs %{centerId: 43, robotId: 43, type: "some updated type", vid: 43}
    @invalid_attrs %{centerId: nil, robotId: nil, type: nil, vid: nil}

    def event_fixture(attrs \\ %{}) do
      {:ok, event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ApiEvent.create_event()

      event
    end

    test "list_events/0 returns all events" do
      event = event_fixture()
      assert ApiEvent.list_events() == [event]
    end

    test "get_event!/1 returns the event with given id" do
      event = event_fixture()
      assert ApiEvent.get_event!(event.id) == event
    end

    test "create_event/1 with valid data creates a event" do
      assert {:ok, %Event{} = event} = ApiEvent.create_event(@valid_attrs)
      assert event.centerId == 42
      assert event.robotId == 42
      assert event.type == "some type"
      assert event.vid == 42
    end

    test "create_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ApiEvent.create_event(@invalid_attrs)
    end

    test "update_event/2 with valid data updates the event" do
      event = event_fixture()
      assert {:ok, %Event{} = event} = ApiEvent.update_event(event, @update_attrs)
      assert event.centerId == 43
      assert event.robotId == 43
      assert event.type == "some updated type"
      assert event.vid == 43
    end

    test "update_event/2 with invalid data returns error changeset" do
      event = event_fixture()
      assert {:error, %Ecto.Changeset{}} = ApiEvent.update_event(event, @invalid_attrs)
      assert event == ApiEvent.get_event!(event.id)
    end

    test "delete_event/1 deletes the event" do
      event = event_fixture()
      assert {:ok, %Event{}} = ApiEvent.delete_event(event)
      assert_raise Ecto.NoResultsError, fn -> ApiEvent.get_event!(event.id) end
    end

    test "change_event/1 returns a event changeset" do
      event = event_fixture()
      assert %Ecto.Changeset{} = ApiEvent.change_event(event)
    end
  end
end
