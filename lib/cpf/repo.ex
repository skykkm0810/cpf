defmodule Cpf.Repo do
  use Ecto.Repo,
    otp_app: :cpf,
    adapter: Ecto.Adapters.Postgres
end
