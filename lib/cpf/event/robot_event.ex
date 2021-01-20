defmodule Cpf.Event.RobotEvent do
  use Ecto.Schema
  import Ecto.Changeset

  schema "robotevents" do
    field :centerId, :integer
    field :deviceId, :integer
    field :event, :string
    field :eventdate, :string
    field :eventtime, :string
    field :vId, :integer

    timestamps()
  end

  @doc false
  def changeset(robot_event, attrs) do
    robot_event
    |> cast(attrs, [:vId, :centerId, :deviceId, :event, :eventdate, :eventtime])
    |> validate_required([:vId, :centerId, :deviceId, :event, :eventdate, :eventtime])
  end
end
