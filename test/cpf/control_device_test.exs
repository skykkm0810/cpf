defmodule Cpf.ControlDeviceTest do
  use Cpf.DataCase

  alias Cpf.ControlDevice

  describe "devices" do
    alias Cpf.ControlDevice.Device

    @valid_attrs %{centerId: 42, location: "some location", name: "some name", status: "some status", type: "some type"}
    @update_attrs %{centerId: 43, location: "some updated location", name: "some updated name", status: "some updated status", type: "some updated type"}
    @invalid_attrs %{centerId: nil, location: nil, name: nil, status: nil, type: nil}

    def device_fixture(attrs \\ %{}) do
      {:ok, device} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ControlDevice.create_device()

      device
    end

    test "list_devices/0 returns all devices" do
      device = device_fixture()
      assert ControlDevice.list_devices() == [device]
    end

    test "get_device!/1 returns the device with given id" do
      device = device_fixture()
      assert ControlDevice.get_device!(device.id) == device
    end

    test "create_device/1 with valid data creates a device" do
      assert {:ok, %Device{} = device} = ControlDevice.create_device(@valid_attrs)
      assert device.centerId == 42
      assert device.location == "some location"
      assert device.name == "some name"
      assert device.status == "some status"
      assert device.type == "some type"
    end

    test "create_device/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ControlDevice.create_device(@invalid_attrs)
    end

    test "update_device/2 with valid data updates the device" do
      device = device_fixture()
      assert {:ok, %Device{} = device} = ControlDevice.update_device(device, @update_attrs)
      assert device.centerId == 43
      assert device.location == "some updated location"
      assert device.name == "some updated name"
      assert device.status == "some updated status"
      assert device.type == "some updated type"
    end

    test "update_device/2 with invalid data returns error changeset" do
      device = device_fixture()
      assert {:error, %Ecto.Changeset{}} = ControlDevice.update_device(device, @invalid_attrs)
      assert device == ControlDevice.get_device!(device.id)
    end

    test "delete_device/1 deletes the device" do
      device = device_fixture()
      assert {:ok, %Device{}} = ControlDevice.delete_device(device)
      assert_raise Ecto.NoResultsError, fn -> ControlDevice.get_device!(device.id) end
    end

    test "change_device/1 returns a device changeset" do
      device = device_fixture()
      assert %Ecto.Changeset{} = ControlDevice.change_device(device)
    end
  end
end
