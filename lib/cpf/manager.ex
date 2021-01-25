defmodule Cpf.Manager do
  @moduledoc """
  The Manager context.
  """

  import Ecto.Query, warn: false
  alias Cpf.Repo

  alias Cpf.Manager.Senior

  @doc """
  Returns the list of seniors.

  ## Examples

      iex> list_seniors()
      [%Senior{}, ...]

  """
  def list_seniors do
    Repo.all(Senior)
  end

  @doc """
  Gets a single senior.

  Raises `Ecto.NoResultsError` if the Senior does not exist.

  ## Examples

      iex> get_senior!(123)
      %Senior{}

      iex> get_senior!(456)
      ** (Ecto.NoResultsError)

  """
  def get_senior!(id), do: Repo.get!(Senior, id)

  @doc """
  Creates a senior.

  ## Examples

      iex> create_senior(%{field: value})
      {:ok, %Senior{}}

      iex> create_senior(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_senior(attrs \\ %{}) do
    %Senior{}
    |> Senior.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a senior.

  ## Examples

      iex> update_senior(senior, %{field: new_value})
      {:ok, %Senior{}}

      iex> update_senior(senior, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_senior(%Senior{} = senior, attrs) do
    senior
    |> Senior.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a senior.

  ## Examples

      iex> delete_senior(senior)
      {:ok, %Senior{}}

      iex> delete_senior(senior)
      {:error, %Ecto.Changeset{}}

  """
  def delete_senior(%Senior{} = senior) do
    Repo.delete(senior)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking senior changes.

  ## Examples

      iex> change_senior(senior)
      %Ecto.Changeset{data: %Senior{}}

  """
  def change_senior(%Senior{} = senior, attrs \\ %{}) do
    Senior.changeset(senior, attrs)
  end
end
