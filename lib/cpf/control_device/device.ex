defmodule Cpf.ControlDevice.Device do
  use Ecto.Schema
  import Ecto.Changeset

  schema "devices" do
    field :centerId, :integer
    field :location, :string
    field :name, :string
    field :status, :string
    field :type, :string

    timestamps()
  end

  @doc false
  def changeset(device, attrs) do
    device
    |> cast(attrs, [:centerId, :location, :name, :status, :type])
    |> validate_required([:centerId, :location, :name, :status, :type])
  end
end
