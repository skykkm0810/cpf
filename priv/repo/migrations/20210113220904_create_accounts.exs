defmodule Cpf.Repo.Migrations.CreateAccounts do
  use Ecto.Migration

  def change do
    create table(:accounts) do
      add :centerId, :integer
      add :uname, :string
      add :pwd, :string
      add :name, :string
      add :contact, :string
      add :birth, :string
      add :email, :string
      add :level, :string

      timestamps()
    end

  end
end
