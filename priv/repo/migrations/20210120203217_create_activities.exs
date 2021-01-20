defmodule Cpf.Repo.Migrations.CreateActivities do
  use Ecto.Migration

  def change do
    create table(:activities) do
      add :name, :string
      add :instructorId, :integer
      add :centerId, :integer
      add :contact, :string
      add :date, :naive_datetime
      add :progress, :string

      timestamps()
    end

  end
end
