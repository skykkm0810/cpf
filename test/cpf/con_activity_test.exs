defmodule Cpf.ConActivityTest do
  use Cpf.DataCase

  alias Cpf.ConActivity

  describe "activities" do
    alias Cpf.ConActivity.Activity

    @valid_attrs %{centerId: 42, contact: "some contact", date: ~N[2010-04-17 14:00:00], instructorId: 42, name: "some name", progress: "some progress"}
    @update_attrs %{centerId: 43, contact: "some updated contact", date: ~N[2011-05-18 15:01:01], instructorId: 43, name: "some updated name", progress: "some updated progress"}
    @invalid_attrs %{centerId: nil, contact: nil, date: nil, instructorId: nil, name: nil, progress: nil}

    def activity_fixture(attrs \\ %{}) do
      {:ok, activity} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ConActivity.create_activity()

      activity
    end

    test "list_activities/0 returns all activities" do
      activity = activity_fixture()
      assert ConActivity.list_activities() == [activity]
    end

    test "get_activity!/1 returns the activity with given id" do
      activity = activity_fixture()
      assert ConActivity.get_activity!(activity.id) == activity
    end

    test "create_activity/1 with valid data creates a activity" do
      assert {:ok, %Activity{} = activity} = ConActivity.create_activity(@valid_attrs)
      assert activity.centerId == 42
      assert activity.contact == "some contact"
      assert activity.date == ~N[2010-04-17 14:00:00]
      assert activity.instructorId == 42
      assert activity.name == "some name"
      assert activity.progress == "some progress"
    end

    test "create_activity/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConActivity.create_activity(@invalid_attrs)
    end

    test "update_activity/2 with valid data updates the activity" do
      activity = activity_fixture()
      assert {:ok, %Activity{} = activity} = ConActivity.update_activity(activity, @update_attrs)
      assert activity.centerId == 43
      assert activity.contact == "some updated contact"
      assert activity.date == ~N[2011-05-18 15:01:01]
      assert activity.instructorId == 43
      assert activity.name == "some updated name"
      assert activity.progress == "some updated progress"
    end

    test "update_activity/2 with invalid data returns error changeset" do
      activity = activity_fixture()
      assert {:error, %Ecto.Changeset{}} = ConActivity.update_activity(activity, @invalid_attrs)
      assert activity == ConActivity.get_activity!(activity.id)
    end

    test "delete_activity/1 deletes the activity" do
      activity = activity_fixture()
      assert {:ok, %Activity{}} = ConActivity.delete_activity(activity)
      assert_raise Ecto.NoResultsError, fn -> ConActivity.get_activity!(activity.id) end
    end

    test "change_activity/1 returns a activity changeset" do
      activity = activity_fixture()
      assert %Ecto.Changeset{} = ConActivity.change_activity(activity)
    end
  end
end
