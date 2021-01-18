defmodule Cpf.ApiEvent.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :centerId, :integer
    field :robotId, :integer
    field :type, :string
    field :vid, :integer

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:vid, :centerId, :robotId, :type])
    |> validate_required([:vid, :centerId, :robotId, :type])
  end
end
