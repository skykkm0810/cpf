defmodule Cpf.Repo.Migrations.CreateInstructors do
  use Ecto.Migration

  def change do
    create table(:instructors) do
      add :name, :string
      add :contact, :string
      add :centerId, :integer
      add :task, :string
      add :region, :string

      timestamps()
    end

  end
end
