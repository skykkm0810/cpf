defmodule Cpf.ConInstructorTest do
  use Cpf.DataCase

  alias Cpf.ConInstructor

  describe "instructors" do
    alias Cpf.ConInstructor.Instructor

    @valid_attrs %{centerId: 42, contact: "some contact", name: "some name", region: "some region", task: "some task"}
    @update_attrs %{centerId: 43, contact: "some updated contact", name: "some updated name", region: "some updated region", task: "some updated task"}
    @invalid_attrs %{centerId: nil, contact: nil, name: nil, region: nil, task: nil}

    def instructor_fixture(attrs \\ %{}) do
      {:ok, instructor} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ConInstructor.create_instructor()

      instructor
    end

    test "list_instructors/0 returns all instructors" do
      instructor = instructor_fixture()
      assert ConInstructor.list_instructors() == [instructor]
    end

    test "get_instructor!/1 returns the instructor with given id" do
      instructor = instructor_fixture()
      assert ConInstructor.get_instructor!(instructor.id) == instructor
    end

    test "create_instructor/1 with valid data creates a instructor" do
      assert {:ok, %Instructor{} = instructor} = ConInstructor.create_instructor(@valid_attrs)
      assert instructor.centerId == 42
      assert instructor.contact == "some contact"
      assert instructor.name == "some name"
      assert instructor.region == "some region"
      assert instructor.task == "some task"
    end

    test "create_instructor/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConInstructor.create_instructor(@invalid_attrs)
    end

    test "update_instructor/2 with valid data updates the instructor" do
      instructor = instructor_fixture()
      assert {:ok, %Instructor{} = instructor} = ConInstructor.update_instructor(instructor, @update_attrs)
      assert instructor.centerId == 43
      assert instructor.contact == "some updated contact"
      assert instructor.name == "some updated name"
      assert instructor.region == "some updated region"
      assert instructor.task == "some updated task"
    end

    test "update_instructor/2 with invalid data returns error changeset" do
      instructor = instructor_fixture()
      assert {:error, %Ecto.Changeset{}} = ConInstructor.update_instructor(instructor, @invalid_attrs)
      assert instructor == ConInstructor.get_instructor!(instructor.id)
    end

    test "delete_instructor/1 deletes the instructor" do
      instructor = instructor_fixture()
      assert {:ok, %Instructor{}} = ConInstructor.delete_instructor(instructor)
      assert_raise Ecto.NoResultsError, fn -> ConInstructor.get_instructor!(instructor.id) end
    end

    test "change_instructor/1 returns a instructor changeset" do
      instructor = instructor_fixture()
      assert %Ecto.Changeset{} = ConInstructor.change_instructor(instructor)
    end
  end
end
