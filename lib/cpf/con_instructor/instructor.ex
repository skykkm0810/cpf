defmodule Cpf.ConInstructor.Instructor do
  use Ecto.Schema
  import Ecto.Changeset

  schema "instructors" do
    field :centerId, :integer
    field :contact, :string
    field :name, :string
    field :region, :string
    field :task, :string
    field :img, :string

    timestamps()
  end

  @doc false
  def changeset(instructor, attrs) do
    instructor
    |> cast(attrs, [:name, :contact, :centerId, :task, :region, :img])
    |> validate_required([:name, :contact, :centerId, :task])
  end
end
