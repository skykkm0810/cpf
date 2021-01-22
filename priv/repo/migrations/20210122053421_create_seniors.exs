defmodule Cpf.Repo.Migrations.CreateSeniors do
  use Ecto.Migration

  def change do
    create table(:seniors) do
      add :name, :string
      add :age, :integer
      add :addr, :string
      add :gender, :string
      add :note, :string
      add :contact, :string
      add :guard, :string
      add :gcontact, :string
      add :centerId, :integer

      timestamps()
    end

  end
end
