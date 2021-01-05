defmodule Cpf.ConCenterTest do
  use Cpf.DataCase

  alias Cpf.ConCenter

  describe "centers" do
    alias Cpf.ConCenter.Center

    @valid_attrs %{address: "some address", contact: "some contact", email: "some email", limited: 42, manager: "some manager", name: "some name"}
    @update_attrs %{address: "some updated address", contact: "some updated contact", email: "some updated email", limited: 43, manager: "some updated manager", name: "some updated name"}
    @invalid_attrs %{address: nil, contact: nil, email: nil, limited: nil, manager: nil, name: nil}

    def center_fixture(attrs \\ %{}) do
      {:ok, center} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ConCenter.create_center()

      center
    end

    test "list_centers/0 returns all centers" do
      center = center_fixture()
      assert ConCenter.list_centers() == [center]
    end

    test "get_center!/1 returns the center with given id" do
      center = center_fixture()
      assert ConCenter.get_center!(center.id) == center
    end

    test "create_center/1 with valid data creates a center" do
      assert {:ok, %Center{} = center} = ConCenter.create_center(@valid_attrs)
      assert center.address == "some address"
      assert center.contact == "some contact"
      assert center.email == "some email"
      assert center.limited == 42
      assert center.manager == "some manager"
      assert center.name == "some name"
    end

    test "create_center/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConCenter.create_center(@invalid_attrs)
    end

    test "update_center/2 with valid data updates the center" do
      center = center_fixture()
      assert {:ok, %Center{} = center} = ConCenter.update_center(center, @update_attrs)
      assert center.address == "some updated address"
      assert center.contact == "some updated contact"
      assert center.email == "some updated email"
      assert center.limited == 43
      assert center.manager == "some updated manager"
      assert center.name == "some updated name"
    end

    test "update_center/2 with invalid data returns error changeset" do
      center = center_fixture()
      assert {:error, %Ecto.Changeset{}} = ConCenter.update_center(center, @invalid_attrs)
      assert center == ConCenter.get_center!(center.id)
    end

    test "delete_center/1 deletes the center" do
      center = center_fixture()
      assert {:ok, %Center{}} = ConCenter.delete_center(center)
      assert_raise Ecto.NoResultsError, fn -> ConCenter.get_center!(center.id) end
    end

    test "change_center/1 returns a center changeset" do
      center = center_fixture()
      assert %Ecto.Changeset{} = ConCenter.change_center(center)
    end
  end
end
