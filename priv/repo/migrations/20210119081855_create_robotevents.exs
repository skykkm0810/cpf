defmodule Cpf.Repo.Migrations.CreateRobotevents do
  use Ecto.Migration

  def change do
    create table(:robotevents) do
      add :vId, :integer
      add :centerId, :integer
      add :robotId, :integer
      add :event, :string
      add :eventtime, :string
      add :eventdate, :string

      timestamps()
    end

  end
end
