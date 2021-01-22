defmodule Cpf.Manager.Senior do
  use Ecto.Schema
  import Ecto.Changeset

  schema "seniors" do
    field :addr, :string
    field :age, :integer
    field :centerId, :integer
    field :contact, :string
    field :gcontact, :string
    field :gender, :string
    field :guard, :string
    field :name, :string
    field :note, :string

    timestamps()
  end

  @doc false
  def changeset(senior, attrs) do
    senior
    |> cast(attrs, [:name, :age, :addr, :gender, :note, :contact, :guard, :gcontact, :centerId])
    |> validate_required([:name, :age, :addr, :gender, :note, :contact, :guard, :gcontact, :centerId])
  end
end
