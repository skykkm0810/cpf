defmodule Cpf.Repo.Migrations.CreateCenters do
  use Ecto.Migration

  def change do
    create table(:centers) do
      add :address, :string
      add :contact, :string
      add :email, :string
      add :limited, :integer
      add :manager, :string
      add :name, :string

      timestamps()
    end

  end
end
