defmodule Cpf.Repo.Migrations.CreateDevices do
  use Ecto.Migration

  def change do
    create table(:devices) do
      add :name, :string
      add :centerId, :integer
      add :type, :string
      add :location, :string
      add :status, :string

      timestamps()
    end

  end
end
