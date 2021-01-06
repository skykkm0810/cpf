defmodule Cpf.Repo.Migrations.CreateDevices do
  use Ecto.Migration

  def change do
    create table(:devices) do
      add :centerId, :integer
      add :location, :string
      add :name, :string
      add :status, :string
      add :type, :string

      timestamps()
    end

  end
end
