defmodule Cpf.ManagerTest do
  use Cpf.DataCase

  alias Cpf.Manager

  describe "seniors" do
    alias Cpf.Manager.Senior

    @valid_attrs %{addr: "some addr", age: 42, centerId: 42, contact: "some contact", gcontact: "some gcontact", gender: "some gender", guard: "some guard", name: "some name", note: "some note"}
    @update_attrs %{addr: "some updated addr", age: 43, centerId: 43, contact: "some updated contact", gcontact: "some updated gcontact", gender: "some updated gender", guard: "some updated guard", name: "some updated name", note: "some updated note"}
    @invalid_attrs %{addr: nil, age: nil, centerId: nil, contact: nil, gcontact: nil, gender: nil, guard: nil, name: nil, note: nil}

    def senior_fixture(attrs \\ %{}) do
      {:ok, senior} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Manager.create_senior()

      senior
    end

    test "list_seniors/0 returns all seniors" do
      senior = senior_fixture()
      assert Manager.list_seniors() == [senior]
    end

    test "get_senior!/1 returns the senior with given id" do
      senior = senior_fixture()
      assert Manager.get_senior!(senior.id) == senior
    end

    test "create_senior/1 with valid data creates a senior" do
      assert {:ok, %Senior{} = senior} = Manager.create_senior(@valid_attrs)
      assert senior.addr == "some addr"
      assert senior.age == 42
      assert senior.centerId == 42
      assert senior.contact == "some contact"
      assert senior.gcontact == "some gcontact"
      assert senior.gender == "some gender"
      assert senior.guard == "some guard"
      assert senior.name == "some name"
      assert senior.note == "some note"
    end

    test "create_senior/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Manager.create_senior(@invalid_attrs)
    end

    test "update_senior/2 with valid data updates the senior" do
      senior = senior_fixture()
      assert {:ok, %Senior{} = senior} = Manager.update_senior(senior, @update_attrs)
      assert senior.addr == "some updated addr"
      assert senior.age == 43
      assert senior.centerId == 43
      assert senior.contact == "some updated contact"
      assert senior.gcontact == "some updated gcontact"
      assert senior.gender == "some updated gender"
      assert senior.guard == "some updated guard"
      assert senior.name == "some updated name"
      assert senior.note == "some updated note"
    end

    test "update_senior/2 with invalid data returns error changeset" do
      senior = senior_fixture()
      assert {:error, %Ecto.Changeset{}} = Manager.update_senior(senior, @invalid_attrs)
      assert senior == Manager.get_senior!(senior.id)
    end

    test "delete_senior/1 deletes the senior" do
      senior = senior_fixture()
      assert {:ok, %Senior{}} = Manager.delete_senior(senior)
      assert_raise Ecto.NoResultsError, fn -> Manager.get_senior!(senior.id) end
    end

    test "change_senior/1 returns a senior changeset" do
      senior = senior_fixture()
      assert %Ecto.Changeset{} = Manager.change_senior(senior)
    end
  end
end
