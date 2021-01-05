defmodule Cpf.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :centerId, :integer
      add :deviceId, :integer
      add :type, :string
      add :userId, :integer
      add :venderId, :integer

      timestamps()
    end

  end
end
