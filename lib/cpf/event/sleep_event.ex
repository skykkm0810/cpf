defmodule Cpf.Event.SleepEvent do
  use Ecto.Schema
  import Ecto.Changeset

  schema "sleepevents" do
    field :awake, :string
    field :centerId, :integer
    field :deviceId, :integer
    field :personId, :integer
    field :sleep, :string
    field :vId, :integer
    field :value, :string

    timestamps()
  end

  @doc false
  def changeset(sleep_event, attrs) do
    sleep_event
    |> cast(attrs, [:centerId, :vId, :deviceId, :value, :sleep, :awake, :personId])
    |> validate_required([:centerId, :vId, :deviceId, :value, :sleep, :awake, :personId])
  end
end
