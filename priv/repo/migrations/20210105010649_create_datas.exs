defmodule Cpf.Repo.Migrations.CreateDatas do
  use Ecto.Migration

  def change do
    create table(:datas) do
      add :desc, :string
      add :emergency, :boolean, default: false, null: false
      add :endedData, :naive_datetime
      add :eventId, :integer
      add :progress, :string
      add :seniorId, :integer
      add :subtitle, :string
      add :title, :string

      timestamps()
    end

  end
end
