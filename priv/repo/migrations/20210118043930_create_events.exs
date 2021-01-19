defmodule Cpf.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :vid, :integer
      add :centerId, :integer
      add :robotId, :integer
      add :type, :string

      timestamps()
    end

  end
end
