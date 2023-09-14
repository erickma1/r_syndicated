class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show destroy]
  def index
    article = Article.all.order(created_at: :desc)
    render json: article
  end

  def create
    article = Article.create!(article_params)
    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def show
    # render json: @article
    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def destroy
    @article&.destroy
    render json: { message: 'Article deleted!' }
  end

  private

  def article_params
    params.permit(:headline, :main_text, :section, :image)
  end

  def set_article
    @article = Article.find(params[:id])
  end

  def article
    @article ||= Article.find(params[:id])
  end
end
