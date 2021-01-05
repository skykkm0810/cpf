defmodule Cpf.ConEvent.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :centerId, :integer
    field :deviceId, :integer
    field :type, :string
    field :userId, :integer
    field :venderId, :integer

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:centerId, :deviceId, :type, :userId, :venderId])
    |> validate_required([:centerId, :deviceId, :type, :userId, :venderId])
  end
end
