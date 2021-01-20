defmodule Cpf.Event do
  @moduledoc """
  The Event context.
  """

  import Ecto.Query, warn: false
  alias Cpf.Repo

  alias Cpf.Event.RobotEvent

  @doc """
  Returns the list of robotevents.

  ## Examples

      iex> list_robotevents()
      [%RobotEvent{}, ...]

  """
  def list_robotevents do
    Repo.all(RobotEvent)
  end

  @doc """
  Gets a single robot_event.

  Raises `Ecto.NoResultsError` if the Robot event does not exist.

  ## Examples

      iex> get_robot_event!(123)
      %RobotEvent{}

      iex> get_robot_event!(456)
      ** (Ecto.NoResultsError)

  """
  def get_robot_event!(id), do: Repo.get!(RobotEvent, id)

  @doc """
  Creates a robot_event.

  ## Examples

      iex> create_robot_event(%{field: value})
      {:ok, %RobotEvent{}}

      iex> create_robot_event(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_robot_event(attrs \\ %{}) do
    %RobotEvent{}
    |> RobotEvent.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a robot_event.

  ## Examples

      iex> update_robot_event(robot_event, %{field: new_value})
      {:ok, %RobotEvent{}}

      iex> update_robot_event(robot_event, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_robot_event(%RobotEvent{} = robot_event, attrs) do
    robot_event
    |> RobotEvent.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a robot_event.

  ## Examples

      iex> delete_robot_event(robot_event)
      {:ok, %RobotEvent{}}

      iex> delete_robot_event(robot_event)
      {:error, %Ecto.Changeset{}}

  """
  def delete_robot_event(%RobotEvent{} = robot_event) do
    Repo.delete(robot_event)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking robot_event changes.

  ## Examples

      iex> change_robot_event(robot_event)
      %Ecto.Changeset{data: %RobotEvent{}}

  """
  def change_robot_event(%RobotEvent{} = robot_event, attrs \\ %{}) do
    RobotEvent.changeset(robot_event, attrs)
  end

  alias Cpf.Event.SleepEvent

  @doc """
  Returns the list of sleepevents.

  ## Examples

      iex> list_sleepevents()
      [%SleepEvent{}, ...]

  """
  def list_sleepevents do
    Repo.all(SleepEvent)
  end

  @doc """
  Gets a single sleep_event.

  Raises `Ecto.NoResultsError` if the Sleep event does not exist.

  ## Examples

      iex> get_sleep_event!(123)
      %SleepEvent{}

      iex> get_sleep_event!(456)
      ** (Ecto.NoResultsError)

  """
  def get_sleep_event!(id), do: Repo.get!(SleepEvent, id)

  @doc """
  Creates a sleep_event.

  ## Examples

      iex> create_sleep_event(%{field: value})
      {:ok, %SleepEvent{}}

      iex> create_sleep_event(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_sleep_event(attrs \\ %{}) do
    %SleepEvent{}
    |> SleepEvent.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a sleep_event.

  ## Examples

      iex> update_sleep_event(sleep_event, %{field: new_value})
      {:ok, %SleepEvent{}}

      iex> update_sleep_event(sleep_event, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_sleep_event(%SleepEvent{} = sleep_event, attrs) do
    sleep_event
    |> SleepEvent.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a sleep_event.

  ## Examples

      iex> delete_sleep_event(sleep_event)
      {:ok, %SleepEvent{}}

      iex> delete_sleep_event(sleep_event)
      {:error, %Ecto.Changeset{}}

  """
  def delete_sleep_event(%SleepEvent{} = sleep_event) do
    Repo.delete(sleep_event)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking sleep_event changes.

  ## Examples

      iex> change_sleep_event(sleep_event)
      %Ecto.Changeset{data: %SleepEvent{}}

  """
  def change_sleep_event(%SleepEvent{} = sleep_event, attrs \\ %{}) do
    SleepEvent.changeset(sleep_event, attrs)
  end
end
