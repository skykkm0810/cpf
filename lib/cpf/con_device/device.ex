defmodule Cpf.ConDevice.Device do
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
    |> cast(attrs, [:name, :centerId, :type, :location, :status])
    |> validate_required([:name, :centerId, :type, :status])
  end
end
