defmodule Cpf.Repo.Migrations.CreateRobotevents do
  use Ecto.Migration

  def change do
    create table(:robotevents) do
      add :vId, :integer
      add :centerId, :integer
      add :deviceId, :integer
      add :event, :string
      add :eventdate, :string
      add :eventtime, :string

      timestamps()
    end

  end
end
