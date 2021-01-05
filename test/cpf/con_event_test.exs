defmodule Cpf.ConEventTest do
  use Cpf.DataCase

  alias Cpf.ConEvent

  describe "events" do
    alias Cpf.ConEvent.Event

    @valid_attrs %{centerId: 42, deviceId: 42, type: "some type", userId: 42, venderId: 42}
    @update_attrs %{centerId: 43, deviceId: 43, type: "some updated type", userId: 43, venderId: 43}
    @invalid_attrs %{centerId: nil, deviceId: nil, type: nil, userId: nil, venderId: nil}

    def event_fixture(attrs \\ %{}) do
      {:ok, event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ConEvent.create_event()

      event
    end

    test "list_events/0 returns all events" do
      event = event_fixture()
      assert ConEvent.list_events() == [event]
    end

    test "get_event!/1 returns the event with given id" do
      event = event_fixture()
      assert ConEvent.get_event!(event.id) == event
    end

    test "create_event/1 with valid data creates a event" do
      assert {:ok, %Event{} = event} = ConEvent.create_event(@valid_attrs)
      assert event.centerId == 42
      assert event.deviceId == 42
      assert event.type == "some type"
      assert event.userId == 42
      assert event.venderId == 42
    end

    test "create_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConEvent.create_event(@invalid_attrs)
    end

    test "update_event/2 with valid data updates the event" do
      event = event_fixture()
      assert {:ok, %Event{} = event} = ConEvent.update_event(event, @update_attrs)
      assert event.centerId == 43
      assert event.deviceId == 43
      assert event.type == "some updated type"
      assert event.userId == 43
      assert event.venderId == 43
    end

    test "update_event/2 with invalid data returns error changeset" do
      event = event_fixture()
      assert {:error, %Ecto.Changeset{}} = ConEvent.update_event(event, @invalid_attrs)
      assert event == ConEvent.get_event!(event.id)
    end

    test "delete_event/1 deletes the event" do
      event = event_fixture()
      assert {:ok, %Event{}} = ConEvent.delete_event(event)
      assert_raise Ecto.NoResultsError, fn -> ConEvent.get_event!(event.id) end
    end

    test "change_event/1 returns a event changeset" do
      event = event_fixture()
      assert %Ecto.Changeset{} = ConEvent.change_event(event)
    end
  end
end
