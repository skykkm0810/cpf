defmodule Cpf.Event.RobotEvent do
  use Ecto.Schema
  import Ecto.Changeset

  schema "robotevents" do
    field :centerId, :integer
    field :event, :string
    field :eventdate, :string
    field :eventtime, :string
    field :robotId, :integer
    field :vId, :integer

    timestamps()
  end

  @doc false
  def changeset(robot_event, attrs) do
    robot_event
    |> cast(attrs, [:vId, :centerId, :robotId, :event, :eventtime, :eventdate])
    |> validate_required([:vId, :centerId, :robotId, :event, :eventtime, :eventdate])
  end
end
