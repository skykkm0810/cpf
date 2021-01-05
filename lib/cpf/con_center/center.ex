defmodule Cpf.ConCenter.Center do
  use Ecto.Schema
  import Ecto.Changeset

  schema "centers" do
    field :address, :string
    field :contact, :string
    field :email, :string
    field :limited, :integer
    field :manager, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(center, attrs) do
    center
    |> cast(attrs, [:address, :contact, :email, :limited, :manager, :name])
    |> validate_required([:address, :contact, :email, :limited, :manager, :name])
  end
end
