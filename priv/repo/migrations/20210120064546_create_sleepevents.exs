defmodule Cpf.Repo.Migrations.CreateSleepevents do
  use Ecto.Migration

  def change do
    create table(:sleepevents) do
      add :centerId, :integer
      add :vId, :integer
      add :deviceId, :integer
      add :value, :string
      add :sleep, :string
      add :awake, :string
      add :personId, :integer

      timestamps()
    end

  end
end
