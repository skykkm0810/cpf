defmodule Cpf.ConAccount.Account do
  use Ecto.Schema
  import Ecto.Changeset

  schema "accounts" do
    field :birth, :string
    field :centerId, :integer
    field :contact, :string
    field :email, :string
    field :level, :string
    field :name, :string
    field :pwd, :string
    field :uname, :string

    timestamps()
  end

  @doc false
  def changeset(account, attrs) do
    account
    |> cast(attrs, [:centerId, :uname, :pwd, :name, :contact, :birth, :email, :level])
    |> validate_required([:centerId, :uname, :name, :contact, :level])
  end
end
