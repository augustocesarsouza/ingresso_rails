module MovieTheatersHelper
  # def render_movie_schedules(cinema_movies)
  #   cinema_movies.each do |cinema_movie|
  #     schedule_parts = cinema_movie.screening_schedule.split(",")

  #     render_schedule_parts(schedule_parts)
  #   end
  # end
  def render_schedule_parts(schedule_parts)
    schedule_parts.each do |schedule_part|
      schedule_part_split_spaces = schedule_part.split(" ")

      render_movie_schedule(schedule_part_split_spaces)
    end
  end

  private

  def render_movie_schedule(schedule_part_split_spaces)
    # Aqui você pode definir a lógica de renderização para cada tipo de horário de filme
    # Se necessário, pode adicionar parâmetros adicionais para personalizar a renderização
    if schedule_part_split_spaces.include?("d")
      render_dublado_schedule(schedule_part_split_spaces)
    elsif schedule_part_split_spaces.include?("v-d")
      render_vip_dublado_schedule(schedule_part_split_spaces)
    elsif schedule_part_split_spaces.include?("v-3d-d")
      render_vip_3d_dublado_schedule(schedule_part_split_spaces)
    elsif schedule_part_split_spaces.include?("3d-db-d")
      render_3d_db_dublado_schedule(schedule_part_split_spaces)
    elsif schedule_part_split_spaces.include?("tg-d")
      render_telas_gigantes_dublado_schedule(schedule_part_split_spaces)
    end
  end

  # Métodos para renderizar cada tipo de horário de filme
  # Você pode definir a estrutura HTML e lógica de renderização necessária aqui

  def render_dublado_schedule(schedule_part_split_spaces)
    # Renderizar horário de filme dublado
  end

  def render_vip_dublado_schedule(schedule_part_split_spaces)
    # Renderizar horário de filme VIP dublado
  end

  def render_vip_3d_dublado_schedule(schedule_part_split_spaces)
    # Renderizar horário de filme VIP 3D dublado
  end

  def render_3d_db_dublado_schedule(schedule_part_split_spaces)
    # Renderizar horário de filme 3D D-BOX dublado
  end

  def render_telas_gigantes_dublado_schedule(schedule_part_split_spaces)
    # Renderizar horário de filme em telas gigantes dublado
  end
end
