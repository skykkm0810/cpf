defmodule Cpf.ConActivity.Activity do
  use Ecto.Schema
  import Ecto.Changeset

  schema "activities" do
    field :centerId, :integer
    field :contact, :string
    field :date, :naive_datetime
    field :instructorId, :integer
    field :name, :string
    field :progress, :string

    timestamps()
  end

  @doc false
  def changeset(activity, attrs) do
    activity
    |> cast(attrs, [:name, :instructorId, :centerId, :contact, :date, :progress])
    |> validate_required([:name, :date, :progress])
  end
end
